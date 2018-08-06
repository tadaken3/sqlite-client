<template>
  <div>
    <h1>ようこそ！</h1>
    <li><router-link to="/">topに戻る</router-link></li>
    <li v-for="tableName in tables"> {{ tableName }} </li>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'hello-page',
    data () {
      return {
        tables: []
      }
    },
    mounted: function () {
      var ipcRenderer = this.$electron.ipcRenderer
      ipcRenderer.send('get-tables', 'render-send')
      ipcRenderer.on('get-tables', (event, arg) => {
        this.tables.push(arg)
      })
    }
  }
</script>
