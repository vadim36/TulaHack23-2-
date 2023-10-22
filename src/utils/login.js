export async function login() {
    await pb.collection('users').authWithPassword(username, password);
}