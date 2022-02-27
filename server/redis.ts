import { 
  Client, 
  Entity, 
  Schema, 
  Repository 
} from 'redis-om';

const client = new Client();

async function connect() {
  if (!client.isOpen()) {
    await client.open(process.env.REDIS_URL);
  }
}

class Rating extends Entity {}
let ratingSchema = new Schema(
  Rating,
  {
    companyName: { type: 'text' },
    interviewType: { type: 'string' },
    jsQuestion: { type: 'boolean' },
    cssQuestion: { type: 'boolean' },
    algorithmsQuestion: { type: 'boolean' },
    dataStructuresQuestion: { type: 'boolean' },
    boilerplateGiven: { type: 'boolean' },
    enoughTime: { type: 'boolean' },
    accessibilityProvided: { type: 'boolean' },
    loopInterviewers: { type: 'number' },
    loopTotalHours: { type: 'number' },
    loopSplitOption: { type: 'boolean' },
    finalWords: { type: 'text' },
    submissionDate: { type: 'date' },
    flags: { type: 'number' }
  },
  {
    dataStructure: 'JSON'
  }
)

export async function createRating(rating) {
  await connect();

  const ratingRepository = client.fetchRepository(ratingSchema);
  const savedRating = ratingRepository.createAndSave(rating);

  return savedRating;
}
