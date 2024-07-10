<template>
  <div>
    <div v-if="localReceivedData && localReceivedData.id">
      <p>Received Boolean Data: {{ localReceivedData.isDataTrueList }}</p>
      <p>Received ID: {{ localReceivedData.id }}</p>
    </div>
    
    <div v-else>
      <p>No data available yet. Please click the button in Child Component 1.</p>
    </div>
    <button @click="handleUpdateDataEdit">Update Data</button>
    <p>Received isDataTrueList: {{ isDataTrueList }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { category, createData } from "@/api";

export default defineComponent({
  data() {
    return {
      isDataTrueList: null,
      localReceivedData: this.receivedData, // Store the prop value in a local data property
    }
  },
  props: {
    receivedData: {
      type: Object,
      default: () => ({ isDataTrueList: Boolean, id: Number }),
    },
  },
  methods: {
    handleUpdateDataEdit() {
      // Update the local copy of the received data
      const modifiedValue = !this.localReceivedData.isDataTrueList;
      this.localReceivedData = {
        ...this.localReceivedData,
        isDataTrueList: modifiedValue,
      };

      // Emit an event to notify the parent component about the update
      this.$emit('update-is-data-true', {
        isDataTrueList: modifiedValue,
        id: this.localReceivedData.id, // You can change this to your desired value
      });
    },
  },
  mounted() {
    // Set isLoading to true when the component is mounted
    //this.handleSubmit();
  },
})
</script>