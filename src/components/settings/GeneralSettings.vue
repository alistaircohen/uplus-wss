<template>
  <div class="container-transparent">
    <h2>General</h2>
    <p>General configuration settings. For more details on how to configure two-factor authentication, click
      <a
        href="https://github.com/pegasystems/uplus-wss/wiki/How-to-configure-two-factor-authentication"
        >here</a
      >.</p>
    <div class="container">
      <div class="body">
        <Container title="Google Analytics" expanded>
          <div class="layout-labels-left">
          <div class="field-item">
            <label for="ga-enabled">Enable</label>
            <input id="ga-enabled" type="checkbox" v-model="settings.general.ga.enabled" />
          </div>
          <div class="field-item">
            <label for="ga-trackingid">Tracking ID</label>
            <input id="ga-trackingid" type="text" v-model="settings.general.ga.trackingid" />
          </div>
        </div>
        </Container>
        <Container title="Two-factor authentication" expanded>
          <div class="layout-labels-left">
            <div class="field-item">
              <label for="2fa-enabled">Enable</label>
              <input id="2fa-enabled" type="checkbox" v-model="settings.general.auth_2fa.enabled" />
            </div>
            <div class="field-item">
              <label for="2fa-url">Server Base URL</label>
              <input id="2fa-url" type="text" v-model="settings.general.auth_2fa.url" />
            </div>
            <div class="field-item">
              <label for="2fa-sendMode">OTP send mode</label>
              <select id="2fa-sendMode" v-model="settings.general.auth_2fa.sendMode">
                <option value='email'>Email</option>
                <option value='sms'>SMS</option>
              </select>
            </div>
          </div>
          <h4>Email</h4>
          <div class="layout-labels-top layout-inline-grid-double">
            <div class="field-item">
              <label for="2fa-email-correspondenceName">Correspondence name</label>
              <input id="2fa-email-correspondenceName" type="text" v-model="settings.general.auth_2fa.emailSettings.correspondenceName" />
            </div>
             <div class="field-item">
              <label for="2fa-email-emailAccount">Email account</label>
              <input id="2fa-email-emailAccount" type="text" v-model="settings.general.auth_2fa.emailSettings.emailAccount" />
            </div>
             <div class="field-item">
              <label for="2fa-email-subject">Subject</label>
              <input id="2fa-email-subject" type="text" v-model="settings.general.auth_2fa.emailSettings.subject" />
            </div>
             <div class="field-item">
              <label for="2fa-email-validateMaxAge">Validate max age</label>
              <input id="2fa-email-validateMaxAge" type="text" v-model="settings.general.auth_2fa.emailSettings.validateMaxAge" />
            </div>
          </div>
          <h4>SMS</h4>
          <div class="layout-labels-top layout-inline-grid-double">
            <div class="field-item">
              <label for="2fa-sms-from">From</label>
              <input id="2fa-sms-from" type="text" v-model="settings.general.auth_2fa.smsSettings.from" />
            </div>
             <div class="field-item">
              <label for="2fa-sms-account">Account</label>
              <input id="2fa-sms-account" type="text" v-model="settings.general.auth_2fa.smsSettings.account" />
            </div>
             <div class="field-item">
              <label for="2fa-sms-message">Message</label>
              <input id="2fa-sms-message" type="text" v-model="settings.general.auth_2fa.smsSettings.message" />
            </div>
             <div class="field-item">
              <label for="2fa-sms-validateMaxAge">Validate max age</label>
              <input id="2fa-sms-validateMaxAge" type="text" v-model="settings.general.auth_2fa.smsSettings.validateMaxAge" />
            </div>
          </div>
        </Container>
      </div>
    </div>
  </div>
</template>

<script>
import { mainconfig } from '../../global';
import Container from '../controls/Container.vue';

export default {
  data() {
    return mainconfig;
  },
  components: {
    Container,
  },
};
</script>
