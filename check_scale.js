const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://mbaqukiraerwhpngzwyz.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1iYXF1a2lyYWVyd2hwbmd6d3l6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE4MzY1NTksImV4cCI6MjA5NzQxMjU1OX0.N8Hkytw3HpMxRWBU7TPzZe4nR72bv-2qwBg1PfrtfrU';
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function main() {
    const { data: pastaData, error: pastaError } = await supabase
        .from('ar_assets')
        .select('scale')
        .eq('item_id', 'pasta')
        .single();
        
    console.log("Pasta scale is:", pastaData?.scale);
}

main();
