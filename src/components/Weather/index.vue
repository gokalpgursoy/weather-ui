<template>
  <div class="container">
    <Header></Header>
    <div class="select">
      <select v-model="selectedLocation">
        <option value="">Select a Location</option>
        <option v-for="location in currentLocations" :value="location.id">{{location.title}}</option>
      </select>
    </div>
    <button class="button is-link" @click='getReport'>Weather Report</button>
    <div class="columns" v-if="isForecast">
      <div class="column is-4">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img :src="res.image">
            </figure>
          </div>
          <div class="card-content">
                <p class="title is-4">Location: <span>{{res.title}}</span></p>
                <p class="title is-4">Temperature: <span>{{res.temp}}</span> °C</p>
                <p class="title is-4">Weather: <span>{{res.weather}}</span></p>

            <div class="content">
              <a :href="res.url" target="_blank">Link</a>
              <br>
              <p>Time: <time>{{res.time}}</time> </p>
              <p><time>{{res.lastUpdate}}</time> </p>
              
            </div>
          </div>
        </div>
      </div>
      <div class="column"></div>
    </div>
    <div v-if="forecastError" class="notification is-warning">
      <button class="delete"></button>
      There are many locations with that location name. Please specify location name.
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header';
import { mapGetters } from 'vuex';
import forecastService from '@/services/forecastService';
import loggerService from '@/services/loggerService';

import _ from 'lodash';

export default {
  name: 'weather',
  data() {
    return {
      selectedLocation: '',
      isForecast: false,
      forecastError: false,
      forecastImage: '',
      title: '',
      res: {},
    };
  },
  components: {
    Header,
  },
  computed: {
    ...mapGetters(['currentLocations', 'userId']),
  },
  async beforeMount() {
    await this.$store.dispatch('getLocations');
  },
  methods: {
    async getReport() {
      /*eslint-disable */
      const startDate = new Date();
      const loc = _.find(this.currentLocations, item => {
        return item.id === parseInt(this.selectedLocation);
      });
      const res = await forecastService.getForecastByTitle(loc.title);
      const obj = {};

      if (res.success) {
        this.forecastError = false;
        this.isForecast = true;
        this.forecastImage = res.image;
        this.title = res.title;
        this.res = res;
        obj.isSuccess = 'true';
      } else {
        this.isForecast = false;
        this.forecastError = true;
        obj.isSuccess = 'false';
      }
      obj.userId = this.userId;
      obj.locationId = this.selectedLocation;
      obj.response = JSON.stringify(res.res);
      const endDate = new Date();
      obj.time = Math.abs(
        endDate.getMilliseconds() - startDate.getMilliseconds()
      );
      await loggerService.setLog(obj);
    },
  },
};
</script>

<style computed>
.columns {
  margin-top: 10px;
}
p span {
  font-weight: normal !important;
}
</style>
