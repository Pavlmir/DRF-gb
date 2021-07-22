<template>
  <footer>
    <div class="footer_content">
      <ul class="menu">
        <li class="menu_li">To-do notes</li>
        <li class="menu_li">8(495)555-77-88</li>
        <li class="menu_li">ask@htmlbook.ru</li>
      </ul>
      <p class="text text_copy">2021 &copy; All rights reserved</p>
    </div>
  </footer>
</template>

<style>
.menu_li {
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0.05em;
  color: #ffffff;
  flex-grow: 1;
  list-style-type: none;
  flex-basis: 33.3333%;
  display: flex;
  margin-right: 32px;
}
.text {
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0.05em;
  opacity: 0.6;
  color: #1f3f68;
}
.text_copy {
  color: #ffffff;
  opacity: 0.4;
  margin-top: 64px;
}
.menu {
  display: flex;
  margin-top: 64px;
  justify-content: space-between;
  background: #002e92;
}
.footer_content{
background: #00b7ff;
}
</style>
