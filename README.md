# Ailfred: Your Personal DeFi Butler on Base

![Ailfred Logo](public/assets/banner.jpeg)

Ailfred is a sophisticated AI agent that serves as your personal DeFi butler on the Base network. With a polite, butler-like demeanor, Ailfred helps you navigate the complexities of DeFi with elegance and precision.

## 🎩 Features

- **Natural Conversation**: Interact with DeFi protocols through natural dialogue with your butler
- **Portfolio Management**: Check balances, view positions, and track investments with simple requests
- **AAVE Integration**: Supply assets to AAVE lending pools and earn competitive yields (~10% APY)
- **Investment Guidance**: Receive personalized recommendations based on your risk tolerance
- **Smart Transaction Handling**: Ailfred handles all technical details and ensures safe transactions

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your API keys to .env.local

# Run the development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to start interacting with Ailfred.

## 💬 Example Commands

- "What's my wallet balance?"
- "Supply 0.001 ETH to AAVE"
- "What investment strategies do you recommend?"
- "Check my AAVE positions"
- "Request ETH from the faucet"

## 🔧 Technical Stack

- **Frontend**: Next.js, React, TypeScript
- **AI**: LangChain, OpenAI GPT-3.5
- **Blockchain**: Ethers.js, Viem
- **DeFi**: AAVE Protocol, Base Network
- **Tools**: AgentKit, CDP Wallet Provider

## 🛡️ Security

Ailfred prioritizes security by:
- Never storing private keys
- Using secure CDP wallet providers
- Validating all transactions before execution
- Implementing proper error handling

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.


## 🙏 Acknowledgments

- Base Network for the infrastructure
- AAVE Protocol for lending capabilities
- Coinbase for AgentKit
- OpenAI for language model support
