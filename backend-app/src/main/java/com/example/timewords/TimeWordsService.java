package com.example.timewords;

import org.springframework.stereotype.Service;

@Service
public class TimeWordsService {

    private static final String[] NUM = {
            "zero","one","two","three","four","five","six","seven","eight","nine","ten",
            "eleven","twelve","thirteen","fourteen","quarter","sixteen","seventeen","eighteen","nineteen",
            "twenty","twenty one","twenty two","twenty three","twenty four","twenty five","twenty six",
            "twenty seven","twenty eight","twenty nine","half"
    };

    // Conversión simple estilo hackerrank; suficiente para demo.
    public String convertTime(int h, int m) {
        if (m == 0) return NUM[h] + " o' clock";
        if (m == 15) return "quarter past " + NUM[h];
        if (m == 30) return "half past " + NUM[h];
        if (m == 45) return "quarter to " + NUM[(h % 12) + 1];
        if (m < 30) return minuteWord(m) + " past " + NUM[h];
        return minuteWord(60 - m) + " to " + NUM[(h % 12) + 1];
    }

    private String minuteWord(int m) {
        String w = NUM[m];
        return (m == 1) ? "one minute" : w + " minutes";
    }
}
