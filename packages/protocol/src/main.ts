import { messageFactory, resourceFactory } from './utils.js'
import { Resource } from './resource.js'
import { Message } from './message.js'

Message.factory = messageFactory
Resource.factory = resourceFactory

export * from './resource-kinds/index.js'
export * from './message-kinds/index.js'
export * from './did-resolver.js'
export * from './dev-tools.js'
export * from './crypto.js'
export * from './types.js'
export { Message, Resource }

