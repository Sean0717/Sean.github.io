
<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'

const { Layout } = DefaultTheme

const { frontmatter } = useData() //这里的frontmatter就是各个md文件中自己写在最上面的东西
</script>

<template>
  <Layout>
    <template #doc-before>
      <span class="page-info">✍️{{ frontmatter.author }}</span>
      <span class="page-info">🕐{{ frontmatter.date }}</span>
      <span>
        🔗
        <span class="page-info" v-for="item in frontmatter.tags" :key="item">{{ item }}</span>
      </span>
    </template>
  </Layout>
</template>

<style>
	header {
		width: 100%;
		height: 250px;
		background-image: url('../../public/banner.jpeg');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}
  .page-info{
    font-size: 14px;
    color: #7f7f7f;
    margin-right: 10px;
		z-index: 99;
  }
</style>