export async function GET() {
    return new Response(JSON.stringify({ message: "Logout successful" }), {
        status: 200,
        headers: {
            "Set-Cookie": "token=; HttpOnly; Path=/; Max-Age=0; Secure; SameSite=Strict",
        },
    });
}
