
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message } = await req.json();
    console.log('Received message:', message);

    if (!openAIApiKey) {
      console.error('OpenAI API key not found');
      return new Response(JSON.stringify({ error: 'OpenAI API key not configured' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const systemPrompt = `You are a helpful AI assistant for OnePlate, a food donation platform. You should provide warm, friendly, and helpful responses about:

1. How to donate food - Guide users to schedule pickups through our platform
2. How to become a volunteer - Direct them to our volunteer application process
3. How to join as a partner - Explain our partnership program
4. Tracking scheduled pickups - Help with understanding their donation status
5. Contact information - Provide relevant contact details:
   - Email: onePlate@gmail.com
   - Phone: +91 12345-67890
   - Address: Indore(M.P.) India
6. Our mission and story - Share information about fighting food waste and helping communities

Always be encouraging and supportive. Keep responses concise but informative. If users need to take specific actions, guide them to the appropriate pages on our website.

If users ask about topics not related to OnePlate, food donation, volunteering, or partnerships, politely redirect them to our main services and mission.`;

    console.log('Making request to OpenAI API...');
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message }
        ],
        temperature: 0.7,
        max_tokens: 300,
      }),
    });

    console.log('OpenAI API response status:', response.status);

    if (!response.ok) {
      console.error('OpenAI API error:', response.status, response.statusText);
      const errorText = await response.text();
      console.error('OpenAI API error details:', errorText);
      return new Response(JSON.stringify({ error: 'Failed to get AI response' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const data = await response.json();
    console.log('OpenAI API response data:', JSON.stringify(data, null, 2));

    // Check if the response has the expected structure
    if (!data.choices || !Array.isArray(data.choices) || data.choices.length === 0) {
      console.error('Invalid OpenAI API response structure:', data);
      return new Response(JSON.stringify({ error: 'Invalid response from AI service' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const reply = data.choices[0].message?.content;
    
    if (!reply) {
      console.error('No content in OpenAI response');
      return new Response(JSON.stringify({ error: 'No response content from AI service' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    console.log('Sending reply:', reply);
    return new Response(JSON.stringify({ reply }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in chat-with-ai function:', error);
    return new Response(JSON.stringify({ error: 'Failed to get AI response' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
