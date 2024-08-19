import {defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Featured Category Name',
    },
    {
      name: 'restaurants',
      type: 'array',
      title: 'Restaurants',
      of: [{type: 'reference', to: [{type: 'restaurant'}]}],
    },

    {
      name: 'short_description',
      type: 'text',
      title: 'Description',
    },
  ],
})
