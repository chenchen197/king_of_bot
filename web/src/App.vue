<template>
 <div>
  hello world
 </div>
 <div>
  bot昵称：{{ bot_name }}
 </div>
 <div>
  bot战力：{{ bot_rating }}
 </div>
</template>

<script>
import $ from 'jquery';
import {ref} from 'vue';
export default{
  name: "app",
  setup: () => {
    let bot_name = ref("")
    let bot_rating = ref("")

    $.ajax(
      {
        url: "http://localhost:3000/pk/getbotinfo/",
        type: "get",
        success:resp =>{
          console.log(resp);
           bot_name.value = resp.name;
          bot_rating.value = resp.rating;
        }
      }
    )
    return {
      bot_name,
      bot_rating
    }
  }
}
</script>

<style>

</style>
