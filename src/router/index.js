import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home.vue'
import Main from '@/components/Main.vue'
import Me from '@/components/Me.vue'
import MusicList from '@/components/MusicList.vue'
import PlayingPage from '@/components/PlayingPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'Main',
      path: '/',
      component: Main,
      redirect: '/home',
      children: [
        {name: 'Home', path: 'home', component: Home},
        {name: 'Me', path: 'me', component: Me}
      ]
    },
    {
      name: 'Music',
      path: '/musiclist',
      component: MusicList
    },
    {
      name: 'Playing',
      path: '/playingpage',
      component: PlayingPage
    }
  ]
})
