
// Import demo room handlers
import { ChatRoom } from './01-chat-room'
import { StateHandlerRoom } from "./02-state-handler";
import { AuthRoom } from "./03-auth";
import { CreateOrJoinRoom } from "./04-create-or-join-room";

let rooms = [
    // Register ChatRoom as "chat"
    { name: 'chat', room: ChatRoom, options: {} },
    // Register ChatRoom with initial options, as "chat_with_options"
    // onInit(options) will receive client join options + options registered here.
    { name: 'chat_with_options', room: ChatRoom, options: { custom_options: 'you can use me on Room#onInit'} },
    // Register StateHandlerRoom as "state_handler"
    { name: 'state_handler', room: StateHandlerRoom, options: {} },
    // Register StateHandlerRoom as 'state_handler'
    { name: 'auth', room: AuthRoom, options: {} },
    // Register CreateOrJoin as 'create_or_join'
    { name: 'create_or_join', room: CreateOrJoinRoom, options: {} }
]

module.exports = rooms