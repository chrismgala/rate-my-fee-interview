<script context="module">
	export const hydrate = false;
  export const prerender = true;

  const companies = [
    "Apple",
    "Microsoft",
    "Alphabet (Google)",
    "Amazon",
    "Tesla",
    "Meta (Facebook)",
    "Salesforce",
    "PayPal",
    "Netflix",
    "SAP",
    "Intuit",
    "IBM",
    "Shopify",
    "ServiceNow",
    "Airbnb",
    "Booking.com",
    "Snowflake",
    "Atlassian",
    "Uber",
    "Activision Blizzard",
    "Workday",
    "Block (Square)",
    "Autodesk",
    "Snap",
    "Coinbase",
    "Zoom",
    "Datadog",
    "eBay",
    "Twilio",
    "Zscaler",
    "Unity Software"
  ];
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section class="home">
  <h1>Search for a company to review</h1>

  <input type="search" placeholder="Company name" />
</section>

<style>
  .home {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  input {
    border: 1px solid #a8a8a8;
    border-radius: .25rem;
    height: 2.5rem;
    padding: 1rem 2rem;
    text-align: center;
    transition: all .2s ease-in-out;
  }

  input:hover,
  input:focus {
    box-shadow: grey 0px 0px 3px;
  }

  input:focus {
    border: 1px solid orange;
    outline: 0;
  }

  input::placeholder {
    text-align: center;
  }
</style>