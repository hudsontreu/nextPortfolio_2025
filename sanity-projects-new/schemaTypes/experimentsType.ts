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
      type: 'object',
      description: 'Add video content via URL or file upload. For best compatibility: 1) Use YouTube/Vimeo links when possible, or 2) Upload MP4 files. While MOV files are supported, they may not play in all browsers.',
      fields: [
        {
          title: 'Video URL',
          name: 'url',
          type: 'url',
          description: 'Paste a YouTube or Vimeo URL. This is the recommended method for better performance and compatibility.'
        },
        {
          title: 'Video File',
          name: 'file',
          type: 'file',
          description: 'Upload a video file. Recommended format: MP4 (H.264). MOV files are supported but may have limited browser compatibility.',
          options: {
            accept: 'video/*'
          }
        },
        {
          title: 'Caption',
          name: 'caption',
          type: 'string',
          description: 'Add a caption to describe the video (optional)'
        },
        {
          title: 'Auto Loop',
          name: 'loop',
          type: 'boolean',
          description: 'Video will play continuously on loop',
          initialValue: false
        },
        {
          title: 'Autoplay',
          name: 'autoplay',
          type: 'boolean',
          description: 'Video will play automatically when loaded (must be muted)',
          initialValue: false
        },
        {
          title: 'Hide Controls',
          name: 'hideControls',
          type: 'boolean',
          description: 'Hide video playback controls',
          initialValue: false
        },
        {
          title: 'Muted',
          name: 'muted',
          type: 'boolean',
          description: 'Mute video (required for autoplay)',
          initialValue: true
        }
      ]
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