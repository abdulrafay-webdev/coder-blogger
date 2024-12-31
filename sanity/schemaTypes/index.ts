import { type SchemaTypeDefinition } from 'sanity'
import BlogPost from './BlogPost'
import Comment from './Comment'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [BlogPost,Comment],
}
