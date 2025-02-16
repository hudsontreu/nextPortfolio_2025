import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projects',
  title: 'Projects',
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
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string'
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
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Software Tools', value: 'softwareTools'},
          {title: 'Installations', value: 'installations'},
          // {title: 'Web Experiments', value: 'webExperiments'},
          {title: 'Time-Based Media', value: 'timeBasedMedia'},
          {title: 'SageNet', value: 'sageNet'},
          {title: 'Other', value: 'other'}
        ]
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
    defineField({
      name: 'primaryDescription',
      title: 'Primary Description',
      type: 'array',
      of: [{
        type: 'block',
        styles: [{ title: 'Normal', value: 'normal' }],
        lists: [],
        marks: {
          decorators: [],
          annotations: [{
            name: 'link',
            type: 'object',
            title: 'URL',
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL'
              }
            ]
          }]
        }
      }]
    }),
    defineField({
      name: 'details',
      title: 'Details', 
      type: 'blockContent'
    }),
    defineField({
      name: 'credits',
      title: 'Credits',
      type: 'array',
      of: [{type: 'string'}]
    }),
    defineField({
      name: 'contributions',
      title: 'Contributions',
      type: 'array',
      of: [{type: 'string'}]
    })
  ]
})