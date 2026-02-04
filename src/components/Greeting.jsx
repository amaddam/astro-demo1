import { useState } from 'preact/hooks';

// 一个简单的随机打招呼的组件
export default function Greeting({messages}) {

    // 从传入的消息列表中随机选择一个消息
    const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

    // 使用useState钩子来管理当前的打招呼消息
    const [greeting, setGreeting] = useState(messages[0]);

    return (
        <div>
            {/* 最终渲染的标题 */}
            <h3>{greeting}! Thank you for visiting!</h3>
            {/* 点击按钮更换打招呼的内容 */}
            <button onClick={() => setGreeting(randomMessage())}>
                New Greeting
            </button>
        </div>
    );
}