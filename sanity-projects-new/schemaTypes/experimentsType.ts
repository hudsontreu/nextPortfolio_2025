import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experiments',
  title: 'Experiments',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Web Experiments', value: 'webExperiments'},
          {title: 'Time-Based Media', value: 'timeBasedMedia'}
        ]
      },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'projectPath',
      title: 'Project Path',
      type: 'string',
      description: 'Folder name in public directory (e.g., "generative-contemplations")'
    }),
    defineField({
      name: 'video',
      title: 'Video',
      type: 'file'
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      options: {
        dateFormat: 'MM-DD-YYYY'
      },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}]
    }),
    defineField({
      name: 'methods',
      title: 'Methods',
      type: 'array',
      of: [{type: 'string'}]
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4
    }),
    defineField({
      name: 'thumbnailType',
      title: 'Thumbnail Type',
      type: 'string',
      options: {
        list: [
          {title: 'Image', value: 'image'},
          {title: 'Video', value: 'video'}
        ]
      },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'headerImage',
      title: 'Header Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'headerVideo',
      title: 'Header Video',
      type: 'file'
    }),
  ]
})