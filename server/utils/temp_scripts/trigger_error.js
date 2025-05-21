// Ensure this script is run from the root of the project, or adjust paths accordingly.
// process.chdir('/app'); // Or wherever the root of your project is if not /app

const path = require('path');
// Corrected path: from server/utils/temp_scripts up two levels to server/, then into models/
const communityHubPath = path.resolve(__dirname, '../../models/communityHub.js');
const { CommunityHub } = require(communityHubPath);

async function main() {
  console.log("Attempting to fetch explore items from trigger_error.js...");
  try {
    const result = await CommunityHub.fetchExploreItems();
    if (result && result.error) {
      console.log("Detailed Error Captured:");
      console.log(result.error); // This is the string we need
    } else if (result) {
      console.log("No 'error' field in result. Full result (from trigger_error.js):");
      console.log(JSON.stringify(result, null, 2));
    } else {
      console.log("Result was undefined or null.");
    }
  } catch (e) {
    console.error("Error directly in main execution of trigger_error.js:", e);
  }
}

main();
