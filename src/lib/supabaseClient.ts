import { createClient } from '@supabase/supabase-js'
import {config} from 'dotenv';
import replace from '@rollup/plugin-replace';

import { env } from '$env/dynamic/private'



export const supabase = createClient(env.API_URL , env.API_CLIENT_KEY)