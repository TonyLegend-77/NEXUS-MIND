# Stack Design: NEXUS MIND

## Asset type
NFT (Non-Fungible Token) — one unique agent identity per HACD lot

## Supply
- **Total supply:** 256 NEXUS MIND NFTs
- **HACD lots:** 256 (1 HACD per lot)
- **Units per HACD lot:** 1 NFT
- **Rationale:** 256 is the number of HACHI lots, a precedent in the HACD ecosystem. It creates genuine scarcity. Each of 256 NEXUS MIND agents is unique and non-replicable.

## Agent archetypes
Each NEXUS MIND is assigned one of four trading personality archetypes at formation:

| Archetype | Count | Trait |
|-----------|-------|-------|
| Momentum | 80 | Trend-following, high conviction |
| Contrarian | 64 | Mean-reversion, counter-narrative |
| Arbitrageur | 64 | Cross-market, efficiency-seeking |
| Sentinel | 48 | Risk-monitoring, defensive posture |

Archetype is determined by the HACD inscription sequence — the on-chain name of the diamond determines the agent's archetype class.

## Stack cost
- **Cost per HACD:** [Needs issuer confirmation with HACD Labs — recommend 20–50 HAC per HACD]
- **Estimated total formation cost:** 256 × stack_cost_hac = [to be confirmed]
- **Network fee:** Required — standard Hacash network fee per transaction
- **Note:** Stack cost figures must be verified with HACD Labs and current HAC market rate before publishing.

## Formation rules
- 1 HACD = 1 NEXUS MIND NFT
- Each NEXUS MIND is unique — no two agents share the same HACD inscription
- Formation is permanent — once stacked, the agent identity exists on-chain forever
- All 256 lots follow equal rules — no pre-allocated or reserved lots (needs issuer confirmation)
- Formation is public and trackable on explorer.hacash.org from day one

## Participant flow
1. Acquire at least 1 HACD diamond
2. Prepare sufficient HAC for stack cost + network fee
3. Go to HACD Launchpad — NEXUS MIND collection
4. Enter your HACD name(s) to stack
5. Confirm Stack transaction
6. Your NEXUS MIND identity is formed on-chain and visible on the Launchpad and explorer

## Removal / burn logic
- **Recommended: burn** — if the stack is removed, the NEXUS MIND NFT is destroyed. The agent identity is gone. This reinforces the permanence and scarcity of each formation.
- Needs issuer confirmation before Launchpad publication.

## Supply math
```
total_supply = 256 HACD lots × 1 NFT per lot = 256 NEXUS MIND NFTs
formation_cost_hac = 256 × [stack_cost_per_hacd]
minimum_per_participant = 1 HACD + [stack_cost] HAC + network fee
```

## Phase model
- **Phase:** Single public phase — all 256 lots open simultaneously
- **Min HACD per participant:** 1
- **Max HACD per participant:** [Needs issuer confirmation — recommend 4–8 to prevent single-wallet dominance]
