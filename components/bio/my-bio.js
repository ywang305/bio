function MyBio() {
  return (
    <div>
      <p>
        {`Software engineer, living in NYC, ${
          new Date().getFullYear() - 2018
        } years developer experience. Work in FinTech at the moment.`}
      </p>
      <br />
      <p>
        I got my master degree from Syracuse University in Computer Science.
        Then I have worked for three companies as software engineer since
        graduation, two of which are in the FinTech industry.
      </p>
      <br />
      <p>
        I am current working in a large investment company in Manhattan, mainly
        with React.js + Ruby on Rails, as well as PostgreSQL and AWS. The
        project I am working on is to serve registered investement advisors.
      </p>
      <br />
      <p>
        I used to work in a cryptocurrency/blockchain FinTech startup;
        Full-stack role with Vue.js, SpringBoot, Nodejs, Kafka, AWS and
        docker-based devops; founding projects: (1) cryptocurrency trading
        systems, leading the front-end development, implementing high-frequency
        trading, exchanges, and the critical components on micro service
        architecture. (2) crypto wallet / payment gateway. That's building
        keypair & transfer services on top of a few blockchain SDKs: HDKeys,
        web3js, bitcore-lib, polkadot.js, filecoin-signer, tron-web...
        Understand on-chain transaction protocols, infras, and token contract
        ERC/TRC20.
      </p>
    </div>
  );
}

export default MyBio;
