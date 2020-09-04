<script>
  import { goto } from '@sapper/app';
  import { onMount } from 'svelte';
  import { _, locale, locales } from 'svelte-i18n';
  import { siteSettings } from '../../store.js';
  import Header from '../../components/layout/header/index.svelte';
  import Button from "../../components/basic/Button/index.svelte";
  import SvgIcon from '../../components/basic/SvgIcon/index.svelte';

  let message = false;
  let isProcessing = false;
  let form;
  let btnSubmit;
  let forma = {
    full_name: '',
    language: $locale,
    location_type: {
      selected: '',
      other: ''
    },
    size_of_project: '',
    approximate_area: '',
    job_timeframe: {
      selected: '',
      date: '',
      other: ''
    },
    additional_info: '',
    additional_details: '',
    contact_by: {
      selected: '',
      email: '',
      phone: ''
    }
  };

    function validEmail(email) {
      var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
      return re.test(email);
    }

    function validateHuman(honeypot) {
      if (honeypot) {  //if hidden form filled up
        // console.log("Robot Detected!");
        return true;
      } else {
        // console.log("Welcome Human!");
      }
    }

    // get all data in form and return object
    function getFormData() {
      var elements = form.elements; // all form elements
      var fields = Object.keys(elements).map(function(k) {
        if(elements[k].name !== undefined) {
          return elements[k].name;
        // special case for Edge's html collection
        }else if(elements[k].length > 0){
          return elements[k].item(0).name;
        }
      }).filter(function(item, pos, self) {
        return self.indexOf(item) == pos && item;
      });
      var data = {};
      fields.forEach(function(k){
        data[k] = elements[k].value;
        var str = ""; // declare empty string outside of loop to allow
                      // it to be appended to for each item in the loop
        if(elements[k].type === "checkbox"){ // special case for Edge's html collection
          str = str + elements[k].checked + ", "; // take the string and append
                                                  // the current checked value to
                                                  // the end of it, along with
                                                  // a comma and a space
          data[k] = str.slice(0, -2); // remove the last comma and space
                                      // from the  string to make the output
                                      // prettier in the spreadsheet
        }else if(elements[k].length){
          for(var i = 0; i < elements[k].length; i++){
            if(elements[k].item(i).checked){
              str = str + elements[k].item(i).value + ", "; // same as above
              data[k] = str.slice(0, -2);
            }
          }
        }
      });

      // add form-specific values into the data
      data.formDataNameOrder = JSON.stringify(fields);
      data.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
      data.formGoogleSendEmail = form.dataset.email || ""; // no email by default

      // console.log(data);
      return data;
    }

    function handleFormSubmit(event) {
      event.preventDefault();           // we are submitting via xhr below
      var data = getFormData();         // get the values submitted in the form

      /* OPTION: Remove this comment to enable SPAM prevention, see README.md */
      if (validateHuman(data.honeypot)) {  //if form is filled, form will not be submitted
        return false;
      }

      if( !validEmail(data.email) ) {   // if email is not valid show error
        document.getElementById('email-invalid').style.display = 'block';
        return false;
      } else {
        isProcessing = true;
        // btnSubmit.disabled = true;
        // btnSubmit.classList.add('disabled');
        // btnSubmit.innerHTML = "...";
        var url = event.target.action;  //
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        // xhr.withCredentials = true;
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function() {
            // console.log( xhr.status, xhr.statusText )
            // console.log(xhr.responseText);
            // document.getElementById('gform').style.display = 'none'; // hide form
            // document.querySelector('.intro-message').style.display = 'none'; // hide intro
            // document.querySelector('.success-message').style.display = 'block'; // show thank you
            message = true;
            return;
        };
        // url encode form data for sending as post data
        var encoded = Object.keys(data).map(function(k) {
            return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
        }).join('&')
        xhr.send(encoded);
      }
    }

    // Cancel form
    function cancelForm(event) {
      // message = true;
      // console.log(event);
      form.reset();
    }

    onMount(() => {
      // console.log('contact form submission handler loaded successfully');
      // bind to the submit event of our form
      // console.log('Loaded!!')
      form.addEventListener("submit", handleFormSubmit, false);
    });
</script>

<svelte:head>
  <title>{$_('page.booking.title')}</title>
</svelte:head>

<article id="booking">
  <section id="section--booking-hero">
    <div class="content-wrapper hero">
      <Header/>

      {#if !message}
      <div class="text intro-message">
        <h1>{$_("page.booking.hero.title")}</h1>
        <p>{$_("page.booking.hero.p_1")}</p>
        <p>{$_("page.booking.hero.p_2")} { $siteSettings.phone }, { $siteSettings.email }</p>
      </div>
      {:else}
      <!-- Success message -->
      <div class="text success-message">
        <SvgIcon type="goal" size="63" />
        <h2>{$_("page.booking.hero.success.title")}</h2>
        <p>{$_("page.booking.hero.success.p")} { $siteSettings.phone }, { $siteSettings.email }</p>
      </div>
      {/if}
    </div>

    <!-- BG Gradient -->
    <div class="bg-gradient"></div>
  </section>

  {#if !message}
  <form bind:this="{form}" id="gform" class="content-wrapper" name="quoteForm"
        method="post"
        action="https://SSSscript.google.com/macros/s/AKfycbwvVjXFteNsBZkRNCMfIRFMUjAfTjGdsxfrAMeejgMXz3PvUm8/exec"
        novalidate="true">

    <!-- QUESTION Where would you like painting? -->
    <fieldset>
      <legend>{$_("page.booking.form.where.title")}</legend>

      <div class="field">
        <div class="control">
          <div class="radio">
            <input type="radio" id="r_w_home" value="Home" name="locationType" bind:group="{forma.location_type.selected}">
            <label for="r_w_home">{$_("page.booking.form.where.point_1")}</label>
          </div>
          <div class="radio">
            <input type="radio" id="r_w_office" value="Office / commercial" name="locationType" bind:group="{forma.location_type.selected}">
            <label for="r_w_office">{$_("page.booking.form.where.point_2")}</label>
          </div>
          <div class="radio">
            <input type="radio" id="r_w_rental" value="Rental unit(s)" name="locationType" bind:group="{forma.location_type.selected}">
            <label for="r_w_rental">{$_("page.booking.form.where.point_3")}</label>
          </div>
          <div class="radio">
            <input type="radio" id="r_w_other" value="other" name="locationType" bind:group="{forma.location_type.selected}">
            <label for="r_w_other">{$_("page.booking.form.where.point_4")}</label>
          </div>
        </div>
      </div>

      {#if forma.location_type.selected == 'other'}
      <div class="margin-top">
        <div class="block control" flex>
          <label class="label label-form">{$_("page.booking.form.common.tell_more")}</label>
          <textarea class="textarea" name="otherLocation" bind:value="{forma.location_type.other}" maxlength="693" select-on-focus></textarea>
        </div>
      </div>
      {/if}
    </fieldset>

    <!-- QUESTION How much painting is involved? -->
    <fieldset>
      <legend>{$_("page.booking.form.how_much.title")}</legend>

      <div class="field">
        <div class="control">
          <div class="radio">
            <input type="radio" id="r_h_single" value="A single room or project" name="projectSize" bind:group="{forma.size_of_project}">
            <label for="r_h_single">{$_("page.booking.form.how_much.point_1")}</label>
          </div>
          <div class="radio">
            <input type="radio" id="r_h_multi" value="Multiple rooms or projects" name="projectSize" bind:group="{forma.size_of_project}">
            <label for="r_h_multi">{$_("page.booking.form.how_much.point_2")}</label>
          </div>
          <div class="radio">
            <input type="radio" id="r_h_notsure" value="I'm not sure" name="projectSize" bind:group="{forma.size_of_project}">
            <label for="r_h_notsure">{$_("page.booking.form.how_much.point_3")}</label>
          </div>
        </div>
      </div>
    </fieldset>

    <!-- QUESTION What is the approximate square footage of the area(s) to be painted? -->
    <fieldset>
      <legend>{$_("page.booking.form.how_big.title")}</legend>

      <div class="field">
        <div class="control">
          <div class="radio">
            <input type="radio" id="r_w_100" value="Less than 100 sq meters" name="approximateArea" bind:group="{forma.approximate_area}">
            <label for="r_w_100">{$_("page.booking.form.how_big.point_1")}</label>
          </div>
          <div class="radio">
            <input type="radio" id="r_w_500" value="100 - 500 sq meters" name="approximateArea" bind:group="{forma.approximate_area}">
            <label for="r_w_500">{$_("page.booking.form.how_big.point_2")}</label>
          </div>
          <div class="radio">
            <input type="radio" id="r_w_1000" value="500 - 1,000 sq meters" name="approximateArea" bind:group="{forma.approximate_area}">
            <label for="r_w_1000">{$_("page.booking.form.how_big.point_3")}</label>
          </div>
          <div class="radio">
            <input type="radio" id="r_w_more" value="More than 1,000 sq meters" name="approximateArea" bind:group="{forma.approximate_area}">
            <label for="r_w_more">{$_("page.booking.form.how_big.point_4")}</label>
          </div>
        </div>
      </div>
    </fieldset>

    <!-- QUESTION When do you need painting? -->
    <fieldset>
      <legend>{$_("page.booking.form.when.title")}</legend>

      <div class="field">
        <div class="control">
          <div class="radio">
            <input type="radio" id="r_w_flexible" value="I'm flexible" name="timeFrame" bind:group="{forma.job_timeframe.selected}">
            <label for="r_w_flexible">{$_("page.booking.form.when.point_1")}</label>
          </div>
          <div class="radio">
            <input type="radio" id="r_w_next" value="In the next few days" name="timeFrame" bind:group="{forma.job_timeframe.selected}">
            <label for="r_w_next">{$_("page.booking.form.when.point_2")}</label>
          </div>
          <div class="radio">
            <input type="radio" id="r_w_soon" value="As soon as possible" name="timeFrame" bind:group="{forma.job_timeframe.selected}">
            <label for="r_w_soon">{$_("page.booking.form.when.point_3")}</label>
          </div>
          <div class="radio">
            <input type="radio" id="r_w_ondate" value="On one particular date" name="timeFrame" bind:group="{forma.job_timeframe.selected}">
            <label for="r_w_ondate">{$_("page.booking.form.when.point_4")}</label>
          </div>
          <div class="radio">
            <input type="radio" id="r_w_othertime" value="Other" name="timeFrame" bind:group="{forma.job_timeframe.selected}">
            <label for="r_w_othertime">{$_("page.booking.form.when.point_5")}</label>
          </div>
        </div>
      </div>

      <div class="margin-top">
        {#if forma.job_timeframe.selected == 'On one particular date'}
        <div class="control input__wrapper">
          <label class="label label-form">{$_("page.booking.form.when.day")}</label>
          <input type="date" class="input input-form" bind:value="{forma.job_timeframe.date}">
        </div>
        {/if}

        {#if forma.job_timeframe.selected == 'Other'}
        <div class="control">
          <label class="label label-form">{$_("page.booking.form.common.tell_more")}</label>
          <textarea class="textarea" name="otherTime" bind:value="{forma.job_timeframe.other}" maxlength="693" select-on-focus></textarea>
        </div>
        {/if}
      </div>
    </fieldset>

    <!-- QUESTION Anything else the painter should know? -->
    <fieldset>
      <legend>{$_("page.booking.form.anything_else.title")}</legend>

      <div class="field">
        <div class="control">
          <div class="radio">
            <input type="radio" id="r_a_no" value="no" checked name="additionalInfo" bind:group="{forma.additional_info}">
            <label for="r_a_no">{$_("page.booking.form.anything_else.point_1")}</label>
          </div>
          <div class="radio">
            <input type="radio" id="r_a_yes" value="yes" name="additionalInfo" bind:group="{forma.additional_info}">
            <label for="r_a_yes">{$_("page.booking.form.anything_else.point_2")}</label>
          </div>
        </div>
      </div>

      {#if forma.additional_info == 'yes'}
      <div class="margin-top">
        <div class="block control">
          <label class="label label-form">{$_("page.booking.form.common.tell_more")}</label>
          <textarea class="textarea" name="additionalInfoOther" bind:value="{forma.additional_details}" maxlength="693" select-on-focus></textarea>
        </div>
      </div>
      {/if}
    </fieldset>

    <!-- QUESTION How would you like to receive quote? -->
    <fieldset>
      <legend>{$_("page.booking.form.how_contact.title")}</legend>

      <div class="field">
        <div class="control">
          <div class="radio">
            <input type="radio" id="r_h_email" value="email" checked name="contactBy" bind:group="{forma.contact_by.selected}">
            <label for="r_h_email">{$_("page.booking.form.how_contact.point_1")}</label>
          </div>
          <div class="radio">
            <input type="radio" id="r_h_both" value="both" name="contactBy" bind:group="{forma.contact_by.selected}">
            <label for="r_h_both">{$_("page.booking.form.how_contact.point_2")}</label>
          </div>
        </div>
      </div>

      <div class="margin-top">
        <!-- Full name -->
        <div class="control input__wrapper">
          <label class="label label-form">{$_("page.booking.form.how_contact.name")}</label>
          <input class="input input-form" name="fullName" bind:value="{forma.full_name}" aria-label="full name">
          <!-- <p class="feedback-form">A message here.</p> -->
        </div>

          <!-- Email -->
        <div class="control input__wrapper">
          <label class="label label-form">{$_("page.booking.form.how_contact.email")}</label>
          <input class="input input-form" name="email" type="email" bind:value="{forma.contact_by.email}" aria-label="email">
          <p id="email-invalid" class="feedback-form">Email is required.</p>
        </div>

        <!-- custom phone -->
        {#if forma.contact_by.selected == 'both'}
        <div class="control input__wrapper">
          <label class="label label-form">{$_("page.booking.form.how_contact.phone")}</label>
          <input class="input input-form" type="tel" name="phoneNumber" bind:value="{forma.contact_by.phone}" aria-label="phone number">
          <!-- <p class="feedback-form">A message here.</p> -->
        </div>
        {/if}
      </div>
    </fieldset>

    <!-- BUTTONS -->
    <!-- TODO: Fix buttons to be inline with the rest of the site -->
    <div class="actions">
      <Button type="reset"
        analytics-on="click"
        analytics-event="Form reset"
        on:click="{cancelForm}">{$_("page.booking.form.button.reset")}</Button>
      <Button type="submit" color="primary" bind:this="{btnSubmit}"
        analytics-on="click"
        analytics-event="Form submitted"
        disabled={isProcessing}>{$_("page.booking.form.button.submit")}</Button>
    </div>

    <input id="honeypot" type="text" name="honeypot" value="" hidden />
    <input id="language" type="text" name="language" value="{$locale == 'en' ? 'English' : 'Spanish'}" hidden />
  </form>
  {/if}
</article>

<style>
#booking {
  display: grid;
}
#booking #section--booking-hero {
  min-height: 600px;
  height: 81vh;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  background-image: url("/assets/backgrounds/booking_blur.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 60% top;
}
#booking #section--booking-hero .content-wrapper.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
  align-items: stretch;
  z-index: 1;
}
#booking #section--booking-hero .text {
  margin: 2em;
  text-align: left;
}
@media screen and (min-width: 768px) {
  #booking #section--booking-hero .text {
    margin: 3em;
  }
}
#booking #section--booking-hero .text.success-message {
  padding-bottom: 3em;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
#booking #section--booking-hero .text.success-message :global(svg) {
  margin: 2rem;
}
#booking fieldset {
  border: 0;
  margin: 3em 2em;
}
@media screen and (min-width: 768px) {
  #booking fieldset {
    margin: 3em 3em;
  }
}
#booking fieldset .control {
  display: flex;
  flex-direction: column;
}
#booking .radio {
  margin: 10px 0;
}
#booking .radio input {
  display: none;
}
#booking .radio input:checked + label:after {
  transform: scale(1);
}
#booking .radio label {
  position: relative;
  padding-left: 32px;
  padding-top: 6px;
  cursor: pointer;
  font-weight: 500;
  box-sizing: content-box;
}
#booking .radio label:before {
  content: "";
  position: absolute;
  width: 22px;
  height: 22px;
  border: 1px solid var(--bg-inverted);
  border-radius: 50%;
  left: 0;
  top: 0;
}
#booking .radio label:after {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  top: 4px;
  left: 4px;
  background: var(--color-blue);
  border-radius: 50%;
  transform: scale(0);
  transition: 0.3s ease;
}
#booking .input__wrapper {
  margin-bottom: 30px;
}
#booking .label-form {
  font-weight: 500;
  display: block;
  margin-bottom: 6px;
}
#booking input.input-form,
#booking textarea {
  height: 42px;
  border: 2px solid var(--border);
  padding: 10px 15px;
  border-radius: 3px;
  background: var(--bg-secondary);
  color: var(--txt-primary);
}
/* #booking input.input-form:focus, #booking input.input-form.active,
#booking select:focus,
#booking select.active,
#booking textarea:focus,
#booking textarea.active {
  outline: none;
  border-color: var(--color-blue);
} */
#booking input.input-form:disabled,
#booking textarea:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}
#booking textarea {
  resize: vertical;
  min-height: 117px;
}
#booking .feedback-form {
  margin-top: 6px;
  color: var(--color-danger);
  display: none;
}
.margin-top {
	margin-top: 1rem;
}
#booking .actions {
  display: grid;
	grid-template-columns: 1fr 1fr;
	border: 0;
	margin: 3em 2em;
}
</style>