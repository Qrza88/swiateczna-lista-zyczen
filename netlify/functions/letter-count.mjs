import {getStore} from '@netlify/blobs';
import {createCounterHandler} from '../lib/letter-count.mjs';

export default createCounterHandler(()=>getStore({name:'pp-letter-receipts',consistency:'strong'}));
