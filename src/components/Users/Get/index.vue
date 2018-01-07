<template>
  <div class="container">
    <Header></Header>
    <router-link to="/users/create">
    <button class="button is-info" id="btnCreate">Create New User</button>
    </router-link>
    <table class="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Username</th>
          <th>Password</th>
          <th>Admin</th>
          <th></th>
        </tr>
      </thead>
      <tbody v-for="item in userList">
        <tr>
          <th>{{item.id}}</th>
          <td>{{item.username}}</td>
          <td>{{item.password.replace('*')}}</td>
          <td v-if="item.isAdmin">
            <span class="icon has-text-success">
              <i class="fa fa-check-square"></i>
            </span>
          </td>
          <td v-if="!item.isAdmin">
            <span class="icon has-text-danger">
              <i class="fa fa-ban"></i>
            </span>
          </td>
          <td>
            <router-link class="button is-black" :to="{ name: 'updateUser', params: { id: item.id }}">Update</router-link>            
            <router-link class="button is-warning" :to="{ name: 'deleteUser', params: { id: item.id }}">Delete</router-link>            
            
          </td>

        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Header from '@/components/Header';
// import userService from '../../../services/userService';

export default {
  name: 'users',
  data() {
    return {
      userList: null,
    };
  },
  components: {
    Header,
  },
  async beforeMount() {
    // this.userList = await userService.get();
    // console.log(this.userList);

    this.$store
      .dispatch('getUsers')
      .then(res => {
        this.userList = res;
      })
      .catch(err => {
        console.log(err);
      });
  },
};
</script>

<style computed>
table {
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: 10px auto;
  width: 100%;
}
#btnCreate {
  margin-top: 100px;
}
</style>
