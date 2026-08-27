(() => {
  "use strict";

  const SUPABASE_URL = "https://ziffnnsgouvsfkxnoqos.supabase.co";
  const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_I1-V0IFZN7ufm4tH6jGJRQ_q0Vmhyqv";

  if (!window.supabase) {
    console.error("Supabase client library is not available.");
    return;
  }

  window.supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
  );
})();
