import TextType from '../React Bits/TextType';
import GradientText from '../React Bits/GradientText';

function ApartadoCafeteria() {
    return (
        <div className="min-h-screen p-6">
            <div className="flex flex-col items-center mt-10">
                {/* Animación con SplitText */}
                <TextType
                    text="Selecciona tu Cafetería Preferida"
                    splitType="chars"
                    className="bg-red-100 text-3xl md:text-4xl font-bold w-[80%] p-10 shadow-md text-center mx-auto"
                    delay={80}
                    duration={0.6}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    textColors={["#000000"]}
                />
                <GradientText
                    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                    animationSpeed={3}
                    showBorder={false}
                    className="custom-class"
                >
                    <p className='mt-6 text-lg md:text-xl text-center px-4'>
                        Recuerda que solo puedes pedir en una cafetería a la vez. ¡Elige sabiamente y disfruta de tu bebida favorita!
                    </p>
                </GradientText>

            </div>
        </div>
    );
}

export default ApartadoCafeteria;
