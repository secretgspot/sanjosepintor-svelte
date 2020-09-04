<script>
  import { _ } from 'svelte-i18n';
  import { siteSettings } from '../../../store.js';
  import SvgIcon from '../../basic/SvgIcon/index.svelte';

	let pricePerMeterInDollars = $siteSettings.price;
	let exchangeRate = $siteSettings.exchangeRate;
  let weightType = 'gallons';
  let unitsType = 'meters';
  let currencyType = 'colones';
  let areaLength = 0;
  let areaWidth = 0;
  let areaHeight = 0;
  let surface = 'smooth';
  let surfaceOptions = {
    siding: 1.5,
    textured: 1.2,
    smooth: 1
  };
  let isCeiling = false;
  let coats = 2;
  let coatsOptions = {
    1: 1,
    2: 1.25,
    3: 1.5
  };
  let quality = 'economy';
  let qualityOptions = {
    luxury: 1.8,
    premium: 1.2,
    economy: 0.81
  };
  $: area = calculateAREA(areaLength, areaWidth, areaHeight, surfaceOptions[surface], isCeiling) || 0;
  $: paint = calculatePAINT(area, qualityOptions[quality], coats, surfaceOptions[surface], weightType, unitsType) || 0;
  $: cost = calculateCOST(area, qualityOptions[quality], coatsOptions[coats], surfaceOptions[surface], currencyType, unitsType) || 0;
  $: if(areaLength == 0 || areaWidth == 0) isCeiling = false;

  //$: console.log(area, paint, cost, quality, coats, isCeiling, surface, areaHeight, areaWidth, areaLength, currencyType, unitsType, weightType);

  const round = (f) => Math.ceil(f * 10) / 10;
  const fixed = (f) => f.toFixed(0);


  // calculate total area
  function calculateAREA(length, width, height, surface, isCeiling) {
    let ceiling_area;

    if (isCeiling) {
      ceiling_area = parseInt(length) + parseInt(width);
    } else {
      ceiling_area = 0;
    }

    // combine surface area
    let surface_area = height * ( parseInt(length) + parseInt(width) );
    // combine ceiling with surface
    let total_surface_area = ceiling_area + surface_area;

    return total_surface_area;
  };

  // calculate paint required
  function calculatePAINT(area, quality, coats, surface, weightType, unitsType) {
    // declare paint coverage per gallon in feet
    if (unitsType == 'meters') {
      var paint_coverage = 33;
    } else {
      paint_coverage = 360;
    }

    // combine area with paint surface
    var area_surface = area * surface;
    // calculate paint required in gallons
    var paint_required_gallons =  (area_surface / paint_coverage) * coats;

    if (weightType == 'liters') {
      var paint_required_liters = toLITERS(paint_required_gallons);
    }

    return weightType == 'liters' ? paint_required_liters : paint_required_gallons;
  };

  // calculate cost
  function calculateCOST(area, quality, coats, surface, currencyType, unitsType) {
		let price;
    if (unitsType == 'meters') {
      price = pricePerMeterInDollars * exchangeRate; // per meter
    } else {
      price = (pricePerMeterInDollars * exchangeRate) / 3.281; // per foot
    }

    let price_colones = area * quality * coats * surface * price;
		let price_dollars;

    if (currencyType == 'dollars') {
      price_dollars = toDOLLARS(price_colones);
    }

    return currencyType == 'dollars' ? price_dollars : price_colones;
  };

  // convert gallons to liters
  function toLITERS(gallons) {
    return gallons * 3.785411784;
  };

  // convert colones to dollars
  function toDOLLARS(colones) {
    return colones * (1 / exchangeRate);
  };
</script>

<section id="section--calculator" class="content-wrapper">
  <div class="left-side">

    <fieldset>
      <legend>{$_("component.calc.area.title")}
        <select bind:value="{unitsType}" aria-label="units">
          <option value="feet">{$_("component.calc.title.feet")}</option>
          <option value="meters" selected>{$_("component.calc.title.meters")}</option>
        </select>
      </legend>

      <!-- Length -->
      <div class="control input__wrapper">
        <label class="label label-form">{$_("component.calc.area.length")}</label>
        <input type="number" class="input input-form" bind:value="{areaLength}" aria-label="length">
      </div>

      <!-- Width -->
      <div class="control input__wrapper">
        <label class="label label-form">{$_("component.calc.area.width")}</label>
        <input type="number" class="input input-form" bind:value="{areaWidth}" aria-label="width">
      </div>

      <div class="control input__wrapper">
        <label class="label label-form">{$_("component.calc.area.height")}</label>
        <input type="number" class="input input-form" bind:value="{areaHeight}" aria-label="height">
      </div>

      <div class="input__wrapper">
        <label class="label-form">{$_("component.calc.area.surface_type.title")} </label>
        <select bind:value="{surface}" aria-label="surface">
          <option value="smooth" selected>{$_("component.calc.area.surface_type.smooth")}</option>
          <option value="textured">{$_("component.calc.area.surface_type.textured")}</option>
          <option value="siding">{$_("component.calc.area.surface_type.siding")}</option>
        </select>
      </div>
    </fieldset>

    <fieldset>
      <legend>{$_("component.calc.extra.title")}</legend>

      <div class="input__wrapper">
        <label class="label-form">{$_("component.calc.extra.paint_quality.title")}</label>
        <select bind:value="{quality}" aria-label="quality">
          <option value="luxury">{$_("component.calc.extra.paint_quality.luxury")}</option>
          <option value="premium">{$_("component.calc.extra.paint_quality.premium")}</option>
          <option value="economy" selected>{$_("component.calc.extra.paint_quality.economy")}</option>
        </select>
      </div>

      <div class="input__wrapper">
        <label class="label-form">{$_("component.calc.extra.coats")}</label>
        <select bind:value="{coats}" aria-label="coats">
          <option value="1">1</option>
          <option value="2" selected>2</option>
          <option value="3">3</option>
        </select>
      </div>

      <!-- <div class="checkbox" v-if="areaWidth > 0 && areaLength > 0">
        <input type="checkbox" id="ceiling" bind:this="isCeiling" on:blur="{calculate}" aria-label="Ceiling"/>
        <label for="ceiling">{$_("component.calc.extra.ceiling")} <span class="box"></span></label>
      </div> -->
    </fieldset>

    <fieldset class="right">
      <legend>
        <select bind:value="{weightType}" aria-label="weight type">
          <option value="gallons" selected>{$_("component.calc.results.gallons")}</option>
          <option value="liters">{$_("component.calc.results.liters")}</option>
        </select>

        <select bind:value="{currencyType}" class="currency-type" aria-label="currency type">
          <option value="colones" selected>{$_("component.calc.results.colones")}</option>
          <option value="dollars">{$_("component.calc.results.dollars")}</option>
        </select>
      </legend>

      {$_("component.calc.results.area_title")}
      <h3>
        <span>{ area }</span>
        <small>{$_(`component.calc.results.sq_${unitsType}`)}<sup>2</sup></small>
      </h3>

      {$_("component.calc.results.paint_title")}
      <h3>
        <!-- <span>{{ paint | round }}</span> -->
        <span>{ round(paint) }</span>
        <small>{$_(`component.calc.results.${weightType}`)}</small>
      </h3>

      {$_("component.calc.results.price_title")}
      <h3>
        <!-- <span>{{ cost | round | fixed }}</span> -->
        <span>{ fixed(round(cost)) }</span>
        <small>{$_(`component.calc.results.${currencyType}`)}</small>
      </h3>
    </fieldset>
  </div>

  <div class="right-side">
    <fieldset class="disclamer">
      <h2>{$_("component.calc.title.title")}</h2>

      <p>{$_("component.calc.disclaimer.p")}</p>

      <h4>{$_("component.calc.disclaimer.included.title")}</h4>

        <ul class="styled">
          <li>{$_("component.calc.disclaimer.included.item_1")}</li>
          <li>{$_("component.calc.disclaimer.included.item_2")}</li>
          <li>{$_("component.calc.disclaimer.included.item_3")}</li>
          <li>{$_("component.calc.disclaimer.included.item_4")}</li>
        </ul>


      <h4>{$_("component.calc.disclaimer.not_included.title")}</h4>

        <ul class="styled">
          <li>{$_("component.calc.disclaimer.not_included.item_1")}</li>
          <li>{$_("component.calc.disclaimer.not_included.item_2")}</li>
          <li>{$_("component.calc.disclaimer.not_included.item_3")}</li>
        </ul>

    </fieldset>
  </div>
</section>

<style>
#section--calculator {
  display: grid;
}
@media screen and (min-width: 768px) {
  #section--calculator {
    grid-template-columns: 1fr 1fr;
  }
}
#section--calculator .left-side {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  flex: 1 1 100%;
  order: 1;
  padding: 2em 1em;
}
#section--calculator .left-side fieldset {
  border: 1px solid var(--border);
}
#section--calculator .left-side fieldset > div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
}
#section--calculator .right-side {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  order: 0;
  flex: 1 1 100%;
  padding: 2em 1em;
}
#section--calculator .right-side fieldset {
  border: 0;
}
#section--calculator .right-side h4 {
	margin: 2rem 0 1rem;
}
#section--calculator h3 {
  margin-top: 0.3rem;
  font-size: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}
#section--calculator h3 small {
  font-size: 33%;
  text-transform: uppercase;
  margin-left: 1rem;
}
#section--calculator fieldset {
  padding-top: 2em;
  margin-bottom: 2em;
}
#section--calculator fieldset.right {
  text-align: right;
}
#section--calculator fieldset.disclamer ul {
  margin-top: 0;
}
#section--calculator fieldset.disclamer ul li {
  width: auto;
}
#section--calculator fieldset.disclamer ul li::marker {
	color: var(--color-blue);
}
#section--calculator legend {
  padding-left: 0.45em;
}
#section--calculator legend select {
  display: inline-block;
}
#section--calculator .input__wrapper {
  margin-bottom: 30px;
}
#section--calculator .label-form {
  font-weight: 500;
  display: block;
  margin-bottom: 6px;
}
#section--calculator input.input-form,
#section--calculator select {
  border: 1px solid var(--border);
	padding: 10px 15px;
	background: var(--bg-secondary);
	color: var(--txt-primary);
}
#section--calculator input.input-form:focus,
#section--calculator select:focus {
  /* outline: none; */
  filter: sepia(1);
}
#section--calculator select {
  height: 45px;
  padding: 9px 12px;
  cursor: pointer;
}
#section--calculator select.currency-type {
  border-left: 0;
}
#section--calculator select option {
  font-weight: 300;
}
</style>