import React from 'react';
import GitHubButton from 'react-github-btn';

const GithubButton = () => (
  <>
    <GitHubButton
      className="github-button"
      href="https://github.com/joshijai2/joshijai2.github.io/fork"
      data-icon="octicon-repo-forked"
      data-size="large"
      data-show-count="true"
      aria-label="Fork joshijai2/joshijai2.github.io on GitHub"
    >
      Fork
    </GitHubButton>
    <GitHubButton
      className="github-button"
      href="https://github.com/joshijai2/joshijai2.github.io"
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
      aria-label="Star joshijai2/joshijai2.github.io on GitHub"
    >
      Star
    </GitHubButton>
  </>
);

export default GithubButton;
