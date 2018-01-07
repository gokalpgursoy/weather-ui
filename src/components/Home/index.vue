<template>
<div class="public">
    <div class="columns home">
    <div class="column is-one-third"></div>
    <div class="column divGeneral">
      <div class="columns">
        <div class="column divAdmin">
          <div class="field">
            <p class="control">
              <button class="button is-black " @click="login">
                LOCATIONS
              </button>
            </p>
          </div>
          <div class="field">
            <p class="control">
              <button class="button  is-info " @click="login">
                USERS
              </button>
            </p>
          </div>
        </div>
        <div class="column divMember">
          <div class="field">
            <p class="control">
              <button class="button  is-success " @click="login">
                WEATHER
              </button>
            </p>
          </div>
          <div class="field">
            <p class="control">
              <button class="button  is-danger " @click="login">
                LOGS
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="column"></div>
  </div>
</div>
</template>

<script>
export default {};
</script>

<style computed>
.home {
  margin-top: 250px;
  margin-left: 80px;
}

.public {
  background-image: url('../../assets/img/forecast-bg.jpg');
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  margin: auto;
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
}

.divGeneral .button {
  width: 200px;
  height: 200px;
  border-radius: 100px;
}
</style>
