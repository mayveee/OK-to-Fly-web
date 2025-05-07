import React, { useState, useEffect } from "react";
import styles from "./AirportInfo.module.css";

// mock 데이터로 공항 규정 설정
const airportRegulations = {
    "JFK Airport": ["Liquid Restrictions: No more than 100ml per container", "Battery Limits: No larger than 300Wh", "Sharp Objects: Prohibited"],
    "Heathrow Airport": ["Liquid Restrictions: No more than 100ml per container", "Battery Limits: No larger than 300Wh", "Sharp Objects: Prohibited"],
    "Narita International Airport": ["Liquid Restrictions: No more than 100ml per container", "Battery Limits: No larger than 300Wh", "Sharp Objects: Prohibited"]
};

const AirportInfo = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredAirports, setFilteredAirports] = useState([
        "JFK Airport - New York City",
        "Heathrow Airport - London",
        "Narita International Airport - Tokyo"
    ]);
    const [selectedAirport, setSelectedAirport] = useState<"JFK Airport" | "Heathrow Airport" | "Narita International Airport" | null>(null);
    const [regulations, setRegulations] = useState<string[]>([]);

    useEffect(() => {
        // 검색어에 맞는 공항 필터링
        const filtered = [
            "JFK Airport - New York City",
            "Heathrow Airport - London",
            "Narita International Airport - Tokyo"
        ].filter((airport) => airport.toLowerCase().includes(searchQuery.toLowerCase()));

        setFilteredAirports(filtered);
    }, [searchQuery]);

    useEffect(() => {
        // 공항 선택 시 해당 공항의 규정 표시
        if (selectedAirport) {
            setRegulations(airportRegulations[selectedAirport]);
        }
    }, [selectedAirport]);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleAirportClick = (airport: string) => {
        const airportName = airport.split(" - ")[0]; // 공항 이름만 추출
        setSelectedAirport(airportName as "JFK Airport" | "Heathrow Airport" | "Narita International Airport");
    };

    return (
        <div className={styles.container}>
            <h2>Airport Info</h2>
            <input
                className={styles.searchBox}
                type="text"
                placeholder="Enter airport name"
                value={searchQuery}
                onChange={handleSearchChange}
            />
            <div className={styles.airportList}>
                {filteredAirports.map((airport) => (
                    <div
                        key={airport}
                        onClick={() => handleAirportClick(airport)}
                        className={styles.airportItem}
                    >
                        {airport}
                    </div>
                ))}
            </div>

            {selectedAirport && (
                <>
                    <h3>Airport Regulations</h3>
                    <div className={styles.regulationInfo}>
                        {regulations.length > 0 ? (
                            regulations.map((regulation, index) => (
                                <div key={index} className={styles.tag}>
                                    {regulation}
                                </div>
                            ))
                        ) : (
                            <div>No regulations available</div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default AirportInfo;
