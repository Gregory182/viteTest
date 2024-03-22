import { io } from "socket.io-client";

const URL = process.env.NODE_ENV === 'production' ? undefined : 'ws://localhost:5009';

// export const socket = io(URL);
export const socket = io(URL, {
  autoConnect: true,
});
