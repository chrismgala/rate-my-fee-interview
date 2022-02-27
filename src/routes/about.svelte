<script context="module">
	export const hydrate = false;
  export const prerender = true;
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<section class="about">
  <h1>Why does this app exist?</h1>
  
  <p>
    This app is <em>not</em> intended to expose the interview questions that 
    companies work hard to craft and keep a surprise. Doing so would hurt the 
    engineers, just as much as the companies, who participate in a Front End 
    Engineer interview.
  </p>

  <p>
    My main goal with this app is to influence companies to use better, more 
    relevant technical questions. I want companies to <em>really</em> think about 
    what they're asking and how it helps them find what they're looking for in a 
    candidate. Not every company needs a rigorous, arduous interview process like 
    those used by MAANG.
  </p>

  <ol>
    <h3>A few things to consider:</h3>

    <li>
      When asking a candidate to solve a coding exercise, companies should be 
      setting up the candidate for success. For example, give the candidate a 
      template with some starter code. It saves time that would instead be wasted 
      installing tools and dependencies. It also still challenges them if you leave 
      the right parts empty.
    </li>

    <li>
      If you want to ask about Data Structures and Algorithms, tailor it to the 
      language at hand. If you're asking a candidate to do a graph traversal in 
      JavaScript, you're probably doing something wrong. If your team has never 
      used Quickselect, don't ask someone to implement it. This isn't just limited 
      to Data Structures or Algorithms. Keep questions relevant to the year in 
      which we live. I bet you very few people are using <b>XMLHTTPRequest</b>, so 
      maybe save that for when you're reminiscing about the "good ol days".
    </li>

    <li>
      A candidate can improve their technical ability, but a shitty person isn't 
      going to change. Pay attention to how the candidate behaves and if they are 
      someone you'd actually want to work with.
    </li>
  </ol>
</section>

<style>
  .about {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 2rem 12rem;
    text-align: center;
  }

  ol {
    padding-left: 0;
  }

  p, li {
    margin: .5rem 0;
  }
</style>