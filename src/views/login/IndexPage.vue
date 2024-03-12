<template>
  <div class="login_container">
      <div class="content">
        <t-card>
          <h1>login</h1>
          <t-form ref="form" class="LoginForm" :colon="true" :label-width="0" >
            <t-form-item name="account">
              <t-input  clearable placeholder="请输入账户名">
                <template #prefix-icon>
                  <icon name="desktop" />
                </template>
              </t-input>
            </t-form-item>

            <t-form-item name="password">
              <t-input  type="password" clearable placeholder="请输入密码">
                <template #prefix-icon>
                  <icon name="lock-on" />
                </template>
              </t-input>
            </t-form-item>

            <t-form-item>
              <t-button theme="primary" type="submit" block>登录</t-button>
            </t-form-item>
          </t-form>
        </t-card>
      </div>
  </div>

</template>

<script lang="ts" setup>
import {Icon} from "tdesign-vue-next";
</script>

<style lang="less" scoped>
  .login_container{
    width: 100vw;
    height: 100vh;
    background-color: darkgray;
  }
</style>