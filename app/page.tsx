import React, { useState } from 'react';

export default function SmartBrokerDashboard() {
  const [isRunning, setIsRunning] = useState(false);

  const startAutomation = () => {
    setIsRunning(true);
    fetch("https://hook.us2.make.com/drkjb28qsii98lydkl3sc15avp93g99v", {
      method: "POST",
      body: JSON.stringify({ command: "start" }),
    });
  };

  return (
    <main className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">SmartBroker AI</h1>
      <p>ระบบอัตโนมัตินายหน้าอัจฉริยะ สร้างรายได้แทนคุณ 100%</p>
      <button
        onClick={startAutomation}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {isRunning ? "กำลังทำงาน..." : "เริ่มระบบอัตโนมัติ"}
      </button>
    </main>
  );
}