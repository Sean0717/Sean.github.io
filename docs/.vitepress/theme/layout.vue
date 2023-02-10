
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
.VPNav {
	background-color: #242424;
}
	#VPContent {
		height: 250px !important;
		background-image: url('../../public/banner.jpeg');
		background-repeat: no-repeat;
		background-size: contain;
		background-position: top;

	}
  .page-info{
    font-size: 14px;
    color: #7f7f7f;
    margin-right: 10px;
  }
</style>