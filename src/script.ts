interface dev{
    name: string;
    tecnologies: string[];
    salute(): void;
}

const devMayki: dev = {
    name: "Mayki Douglas",
    tecnologies: ["Flutter", "Java", "PHP", "Typescript"],
    salute(){
        console.log(`> Sistema inicializado por ${this.name}.`);
    }
};

devMayki.salute();