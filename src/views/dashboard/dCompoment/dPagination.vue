<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item" v-if="currentPage > 1">
        <a
          class="page-link"
          href="#"
          @click.prevent="$emit('change-page', currentPage - 1)"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li v-for="n in totalPages" :key="n" class="page-item">
        <a
          class="page-link"
          :class="{ active: currentPage === n }"
          @click.prevent="$emit('change-page', n)"
        >
          {{ n }}
        </a>
      </li>
      <li class="page-item" v-if="currentPage < totalPages">
        <a
          class="page-link"
          href="#"
          @click.prevent="$emit('change-page', currentPage + 1)"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    currentPage: Number,
    totalPages: Number,
  },
  emits: ["change-page"],
};
</script>
