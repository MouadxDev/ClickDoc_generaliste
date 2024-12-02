import { defineStore } from 'pinia';

interface State {
  socket: any
}

export const useSocketStore = defineStore("socket", {
    state: () : State => {
      return {
        socket : new WebSocket("wss://clickdoc.webredirect.org/websocket/"),
      };
    },
    getters:{
      getSocket(state)
      {
        return state.socket
      }
    }
});