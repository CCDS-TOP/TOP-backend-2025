import { v4 as uuidv4 } from 'uuid';


type Suit = 'Spades' | 'Hearts' | 'Diamonds' | 'Clubs';
type Rank = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'Jack' | 'Queen' | 'King' | 'Ace';

type PokerCard = `${Rank} of ${Suit}`;

export interface ICard {
    myCard: PokerCard
}

/*
    not storing parent OG data because it feels redundant 
    given our current sub-OG naming conventions. 
    Might change this later. 
*/

export interface ISubOG {
    subOGName: string;
    cards: PokerCard[];  // Array of cards assigned to Sub-OG
    lastCardEarnedAt: Date;
    SubOGId: string;
}

export interface IOG {
    ogName: string;
    subOGs: ISubOG[];
    OGId: string;
}

export interface ILeaderboard {
    allSubOGs: ISubOG[];  // Array of OGs, which shall be sorted later
    LeaderboardId: string;
}


// Mock data
const ace1: ISubOG = {
    subOGName: "...",
    cards: ["Ace of Spades", "2 of Hearts", "3 of Diamonds"],
    lastCardEarnedAt: new Date("2024-12-19T10:00:00Z"),
    SubOGId: uuidv4()
};

const ace2: ISubOG = {
    subOGName: "...",
    cards: ["King of Clubs", "Ace of Hearts"],
    lastCardEarnedAt: new Date("2024-12-18T15:00:00Z"),
    SubOGId: uuidv4()

};

// Example of mock OG data
const og1: IOG = {
    ogName: "OG1",
    subOGs: [ace1, ace2],
    OGId: uuidv4()

};

const leaderboard: ILeaderboard = {
    allSubOGs: [ace1, ace2],  // Example leaderboard sorted by rank
    LeaderboardId: uuidv4()
}

