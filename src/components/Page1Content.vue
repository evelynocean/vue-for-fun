<template>
  <form class="page-1-content">
        <div class="--con">
            <label>title:{{title}}</label> 
        </div>
        <div class="--con">
            <label>input, v-model, computed, methods</label>
            <div>
                <input v-model="firstName" placeholder="firstName">
                <input v-model="lastName" placeholder="LastName">
                {{fullName}}
            </div>
            <div>
                <textarea v-model="textareaMessage" placeholder="textarea testing"></textarea>
                <p style="white-space: pre">reversedMessage : {{ reversedMessage() }}</p>
            </div>
        </div>
        <div class="--con">
            <label>checkbox /radio (in_array, * :class test!)</label>
            <div class='--chk'>
                <label><input type="checkbox" value="checkbox-1" v-model="CHK" v-on:change="updateCHK" :checked="checked" :class="[checked ? 'checked-style' : '']">
                checkbox-1</label>
                <label><input type="checkbox" value="checkbox-2" v-model="CHK" v-on:change="updateCHK" :checked="checked" :class="[checked ? 'checked-style' : '']">
                checkbox-2</label>
                <label><input type="checkbox" value="checkbox-3" v-model="CHK" v-on:change="updateCHK" :checked="checked" :class="[checked ? 'checked-style' : '']">
                checkbox-3</label>
                {{CHK}}
            </div>
        </div>
        <div class="--con">
            <label></label>
        </div>
        <div class="--con">
            <label></label>
        </div>
        <div class="--con">
            <label></label>
        </div>
        <div class="--con">
            <label></label>
        </div>
  </form>
</template>
<style>
    .page-1-content .--con, .--con div {
        padding: 12px;
    }
    .page-1-content label {
        color: navy;
        line-height: 30px;
        font-weight: 700;
        font-size: 1.3rem;
        padding-left: 12px;
    }

    .--chk label {
        color: ＃000;
        line-height: 20px;
        font-weight: 500;
    }

    .checked-style {
        color: darkred;
    }
</style>
<script>
export default {
  name: 'page1',
  data () {
    return {
      title: 'page 1 content',
      firstName: '',
      lastName: '',
      textareaMessage: '',
      CHK: []
    }
  },
  computed: {
    fullName: function () {
        console.log(this.firstName, this.lastName)
      return this.firstName + ' ' + this.lastName
    }
  },
  methods: {
    reversedMessage: function () {
      return this.textareaMessage.split('').reverse().join('')
    },
    updateCHK: function ($event) {
        if (this.CHK.indexOf($event.target.value) >= 0) {
           console.log('in_array');
        } else {
            console.log('no');
        }
    }
  }
}
</script>
