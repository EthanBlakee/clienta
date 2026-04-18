import { ChatWindow } from '@/components/chat-window';

export default function ChatPage() {
  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="mb-4 text-2xl font-semibold">Incoming Message Simulation</h1>
      <ChatWindow />
    </main>
  );
}
