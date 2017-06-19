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
            <label>checkbox /radio (in_array, <span class="todo">* :class test!</span>)
            <span class="todo">* 改為v-for</span>
            </label>
            <div class='--chk'>
                <label><input type="checkbox" value="checkbox-1" v-model="CHK" v-on:change="updateCHK" :checked="checked">
                checkbox-1</label>
                <label><input type="checkbox" value="checkbox-2" v-model="CHK" v-on:change="updateCHK" :checked="checked">
                checkbox-2</label>
                <label><input type="checkbox" value="checkbox-3" v-model="CHK" v-on:change="updateCHK" :checked="checked">
                checkbox-3</label>
                <label v-for="n in 3" style="display:none;">
                    <input type="checkbox" value="checkbox-1" v-model="CHK" v-on:change="updateCHK" :checked="checked">
                    checkbox-{{n}}
                </label>
                {{CHK}}
                <p>
                <label><input type="radio" value="1" v-model="RDO">radio-1</label>
                <label><input type="radio" value="2" v-model="RDO">radio-2</label>
                <label><input type="radio" value="3" v-model="RDO">radio-3</label>
                {{RDO}}
            </div>
        </div>
        <div class="--con">
            <label>select / datepicker </label>
            <div>
            <select v-model="selectedSingle" :name="singleSel">
            <option v-for="item in selectItems">{{item.name}}</option>
            </select>
            <br>Selected: {{selectedSingle}}
            <br>
            <select v-model="selectedMulti" multiple :name="multiSel">
            <option v-for="item in selectItems">{{item.name}}</option>
            </select>
            <br>Selected: {{selectedMulti}}
            </div>
        </div>
        
        <div class="--con">
            <label>todo list </label>
            <div>
            </div>
        </div>
        <div class="--con">
            <label>table / sort table</label>
            <div>
            </div>
        </div>
        <div class="--con">
            <label></label>
            <div>
            </div>
        </div>
        <div class="--con">
            <label></label>
            <div>
            </div>
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

    .checked-style, .todo {
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
      CHK: [],
      RDO: '2',
      selectItems: [
        {'name': 'option-1'},
        {'name': 'option-2'},
        {'name': 'option-3'},
        {'name': 'option-4'},
        {'name': 'option-5'}
      ],
      selectedSingle: '',
      selectedMulti: ''
    }
  },
  computed: {
    fullName: function () {
        return this.firstName + ' ' + this.lastName
    }
  },
  methods: {
    reversedMessage: function () {
      return this.textareaMessage.split('').reverse().join('')
    },
    updateCHK: function ($event) {
        console.log($event.parentNode);
        if (this.CHK.indexOf($event.target.value) >= 0) {
           console.log('in_array');
        } else {
            console.log('no');
        }
    }
  }
}
</script>
