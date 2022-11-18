# stolenrobes.xyz

This has been forked from [https://n00trals.xyz](https://n00trals.xyz).
Huge props to them!

Stolen Robes are a [y00ts](https://y00ts.com) clubhouse, with the specific clothes trait of "Stolen Hotel Robe".
### Adapting for other clubs

This was built to work mostly out of the box with Netlify. Otherwise you'll need familiarity with building Javascript packages. We also recommend picking up a cheap domain at [Namecheap](https://www.namecheap.com/).

1. Choose "Fork > Create a new fork" from the button in the top right.
2. In your forked repository make the following changes:
   - Copy [example.config.json](./example.config.json) to `config.json` and update it with your club's details and traits.
     - Only include the minimum traits you want to be included E.g stolen robes only include
   ```
   "traits": {
        "Clothes": [
            "Stolen Hotel Robe"
        ]
    }
   ```
   - Commit these changes to your repository's main branch

#### If you're using Netlify

1. Create a new [Netlify](https://www.netlify.com/) site and import an existing project.
2. Connect to Github.
3. Choose your forked repository.
4. Update the settings as necessary.
   - Branch to deploy: main
   - Build command: yarn build
   - Publish directory: build
5. Click "Deploy site" **NOTE THAT THIS WILL FAIL**
6. Go back to your Netlify site overview
7. Click "Site settings"
8. Change site name (note that this name will be used for all your Netlify URLs in the following steps).
9. In the left navigation choose "Environment variables".
10. Click "Add a variable".
11. Click "Show advanced" and add the following environmental variable
   - Key: `PUBLIC_URL`
   - Scopes: All scopes
   - Values: Different value for each deploy context
     - Production: the URL of your club (eg. https://stolenrobes.xyz or https://stolenrobes.netlify.app/)
     - Local development: `http://localhost:8443`
     - Add a branch value
       - Branch name: `development`
       - Value for branch development: the development URL of your club (eg. https://development--stolenrobes.netlify.app/)
12. Go to the Deploys tab in the top navigation.
13. Click "Trigger deploy" > "Deploy site".


#### Without Netlify

* Create `.env` and `.env.development` files based on [example.env](./example.env).
* Run `yarn install` to install all the dependencies.
* Run `yarn generate-members` to generate your member list based on the traits.
* Run `yarn build` to build the production app to `./build`.
* Run `yarn start-express-dev` to run the development app on [http://localhost:8443/](http://localhost:8443/).

#### System requirements
* Running node >= v18 [https://nodejs.org/en/download/](https://nodejs.org/en/download/). 

### Membership updates

Until y00ts mints out, we have to scrape the `mintAddress` to show the "minted"/ME" banners.
There is a Github workflow called [Membership](./.github/workflows/members.yml) that is scheduled to run twice a day, 12pm UTC (8am EST) and 12am UTC (8pm EST).
If you need to make manual updates, you will need to run the `get-collection` script, followed by the `generate-members` script. 

As this is scraping the y00ts API, we need to not overload requests.
 **Please don't run this more than once an hour.**