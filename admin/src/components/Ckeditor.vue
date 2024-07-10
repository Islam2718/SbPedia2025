<template>
  <!-- Use ref to get a reference to the textarea -->
  <textarea ref="editor1" :id="editorId" :name="editorName" :cols="editorCols" :rows="editorRows"></textarea>
</template>

<script>
import { onMounted, ref, watch } from 'vue';

export default {
  name: 'CkEditor',
  props: {
    modelValue: String,
    editorId: {
      type: String,
      default: 'editor1',
    },
    editorName: {
      type: String,
      default: 'editor1',
    },
    editorCols: {
      type: Number,
      default: 30,
    },
    editorRows: {
      type: Number,
      default: 10,
    },
  },
  
  
  setup(props, { emit }) {
    const editorRef = ref(null);

    // Watch for changes in the modelValue prop and update the CKEditor
    watch(() => props.modelValue, (newContent) => {
      if (editorRef.value) {
        editorRef.value.setData(newContent);
      }
      else {
        console.error('CKEditor not found');
        // editorRef.value.setData(newContent);
      }
    });

    onMounted(() => {
      // Initialize CKEditor
        window.CKEDITOR.replace(props.editorId);
        const editor = window.CKEDITOR.instances[props.editorId];     
        // Set initial content
        editor.setData(props.modelValue);

        // Listen for changes in CKEditor and emit update:modelValue event
        editor.on('change', () => {
          emit('update:modelValue', editor.getData());
        }); 
      
      
    });

    return {
      editorRef,
    };
  },
};
</script>

<style scoped>
#cke_editor1 .cke_top {
  border-bottom: 1px solid #d9dee3;
  background: #f5f5f9 !important;
  padding: 6px 8px 2px;
}
</style>
