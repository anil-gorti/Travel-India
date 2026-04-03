import { User, Meetup, Message, Vouch } from './types';

export const MOCK_USER: User = {
  id: 'user-1',
  name: 'Arjun Mehta',
  avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdj4OebOqtkFehPYlLbjrbYiElj1CzlpdfgB5h66yrixjCJ2Ni_lONmOPrlTwoLv14PW7S916GxM0CL2-lsJbB15yA1_KqVsuGQqQ3qLS7ra47gEvk7-ZoeqyGp9GLXSBcTKEqvS05DjMYaf-76mZmILw973iC9_CA760Lgy4NAx6p7YiGhQLHaUkpvJznG2ou0YGckn2aTTY5i0cJtwecV_XK0ps96fmE14h9tmK8LIhoImuPP0qMqwiIiUsDVZHifjfy1lrSkWKE',
  isVerified: true,
  yaarScore: 98,
  bio: 'Exploring the world, one chai at a time.',
  joinDate: '2021'
};

export const MOCK_MEETUPS: Meetup[] = [
  {
    id: 'meetup-1',
    title: 'Evening Chai & Monsoon Stories',
    host: {
      id: 'host-1',
      name: 'Priya K.',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHYZvQybfKRS7SIuAcoGRhEOvl10HYncCUUPd9If7BJShSDGggQeGHurWIjlWnV2NGCj-6mzhEe8SKDCxSh4STvNNI38LWcxBrxeqpeVasfxEcKpYUtKGo1bL3MmPtbQgpUzjMKWxcdVFB-jqPuizJ-c8uf1If2G3GiluQ87cnzfNOSI6t2ZQ8-Gs6bkIwwg6rHNtyHXv7THL2LAUycDiR8sBoPlBHNi_wwMpAxIR-0cmm6Na-IhVKSmP14MWU1yPy2jNjGeVgo9uX',
      isVerified: true,
      yaarScore: 95
    },
    location: 'Irani Café, Fort',
    distance: '1.2km away',
    participants: 3,
    maxParticipants: 5,
    category: 'Food',
    startTime: '18:30',
    duration: '2 Hours',
    date: 'Today',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwR7tckXbb01vSAC_Ag2oKMv2mRpuLLb5QBysedMuG24Bq3hcwcUWjwND3sEqvJBFi0zH5qf18q7EHaTBE-xYsYZNdvvFLuYI0c1hW3_vOAOqAwqaAMUBcR1QH7lPnyLQ5yeaBebgBm3oUPBWa4kecZaTuWy0_gthE5UVIejBuw1ygjFo71ev61lHTL9iHycmnkJ8kTc-Z6L6wQ75ke8QsI5c-8zcYPI1fiLhZx6XyP3yuIzMG5y-Ox0eV2dbtNQnUNeikJOqYvQzJ'
  }
];

export const MOCK_MESSAGES: Message[] = [
  {
    id: 'msg-1',
    senderId: 'amara',
    senderName: 'AMARA',
    senderAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWprUlwIwJ9hZUOO9qHpNP0slUmIQffvnhLYR0t-s5y227K_rdLLK9ni3vM7RUlgt1MxUdCk7SjLiCdsI1vAreGQRiOOaXQQjjZVhJt6KKUAvFwWqH4oHNdDYaEKBbfy8xtEs113K4nIOZsNLp3VTNl5zM0JKIhcZHON8EpfCrT8sFshGY_85rong6ziAEjf2Bndl6kQfRQBYtKXSyGONcIiBECmr6EHEk0h3Kb6bgF6LqtknUrcKag7aqrGOeuNuahMS3EBRKhPbq',
    text: 'Hey everyone! Just reached the Rooftop Lounge. The view of the city is incredible today. Who else is nearby? 🌆',
    timestamp: '5:12 PM',
    isUser: false,
    isVerified: true
  },
  {
    id: 'msg-2',
    senderId: 'rohan',
    senderName: 'ROHAN',
    senderAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-4QgMxZ24BAEC7wq1gzCL-cCqXJghal5a4P09zpP0mfq7rwYUFQ0adMk5AePbQ-y5SKYl4sFUBK3wFN8zMoCvqyx7u852zgrRdcIViWe8imZ41Z5gDs-P_-gnBcjaPd7LXfIIk5yKbro2Z1-Ci1SmSYqBohJahty-R7V5nBFv_b_jvxjGOWFNCa7gM70Yx5C9qggcYkr4POzULnYL2-Z1MuCKKLJxpLDFLbtXhvlbYKe6eyN4RCGz-jY_KaVdimcz6MHg5L5yBiyo',
    text: 'Parking is a bit crazy but I\'m 5 mins away! Order some appetizers? 🍟',
    timestamp: '5:14 PM',
    isUser: false
  },
  {
    id: 'msg-3',
    senderId: 'user-1',
    senderName: 'Arjun',
    senderAvatar: MOCK_USER.avatar,
    text: 'Just checking in now at the entrance! Will meet you guys at the lounge in a sec. I\'m wearing a yellow jacket so I\'m easy to spot. 🧥',
    timestamp: '5:20 PM',
    isUser: true
  }
];

export const MOCK_VOUCHES: Vouch[] = [
  {
    id: 'v-1',
    authorName: 'Priya S.',
    authorAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGua6MNn4OYWZ3P46a4C5cnZkOQ3ZdlUrxCZ6tGfmxfIJpYzyIND5pcMVHcDfO52WXKngoi9qqrbvq39KbCi7ZoqIhCVh6GH4ntbFV9Yd41RI6NfIW2bHBgyQaeSaoAt0rUSEerpK6onJ7sSNEuo7TQLDGZyLCpFLOo-PULXXkWlAPdn9JmBrEFVh6Rkxm9sUMQhvHN3gzwZnpwx6LHwY4U4QmkCyMcThurAeDQA2uZKVTG-ceQ_uU1WGtFKBNcAQL6RobaE_VtPaT',
    text: 'Arjun is a pro at finding the hidden gems in Hampi. Safe traveler!',
    timestamp: '2 days ago'
  },
  {
    id: 'v-2',
    authorName: 'Rahul K.',
    authorAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBES5et5aXrdTj7NUqsadWq43kLljRHe9xOcui7q7Wf_xGjJIiUPH-p07V9qSAxEEcZk1qz5tpeI3GHQ6iueBM3olPDQT3LNmpu8qfOOouzg6nu3wOBDpCBbW6lgBmAHQ6DDXFeIH8dZVgr5ivi7xcLNsAOKfhSsCCcpkALFHio9Q4GRPogMD6600JRAEH0QuWkds1DIPmVl3YX7qKda46XZJutIoa2z0IbY_WFjjG3orePcFRJjG_OMrKfB2O263IY-2hE29weNAYA',
    text: 'Great conversation and very respectful of local traditions.',
    timestamp: '1 week ago'
  }
];
