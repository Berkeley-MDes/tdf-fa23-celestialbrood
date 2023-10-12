## Project 2 Specs: 

🪷TDF Mindful Meditation Bloom 
Project Overview
Meditation Bloom aims to amalgamate technology, aesthetic, and mindfulness, crafting a transformative physical and mental experience. It is a meditation-assistive device that provides a multi-sensory experience by integrating visual, tactile, and audial cues, thus enhancing the user's focus and immersion during the meditation process.


Components:
1. Meditation Flower:
Function: 
Opens and closes in synchronization with the prescribed meditation breathing pattern.

Design: 
Resembling a delicate flower that blooms and retreats, providing a visually calming and metaphorically rich imagery.

Technology:
Utilizes mechanical petals that are controlled by a microcontroller, ensuring smooth and synchronized movement.

Lighting:
Subtle and adjustable lighting that complements meditation moods and provides ambience.

2. Wristband
Function: 
Vibrates subtly, aligning with the meditation breathing pace and providing tactile feedback for breathing synchronization.

Design: 
Ergonomic, lightweight, and non-intrusive, ensuring comfort and aesthetic appeal.

Technology:
Employs a precision haptic motor which can adjust vibration intensity and pattern, to avoid startling the user and to align accurately with the meditation rhythm.
Target Audience
Primary:
Individuals seeking innovative and immersive meditation experiences.

Secondary:
Wellness centers, therapists, and yoga studios that could utilize the device to enhance their service offering.
User Interaction
The user initiates a meditation session via a mobile application, selecting or customizing their breathing pattern and pace.
The Meditation Flower responds by opening and closing in tandem with the selected breathing pattern, while simultaneously illuminating to establish a serene environment.
The wristband vibrates in sync with the pattern, providing tactile cues to assist the user in maintaining the prescribed breathing rhythm.

Objectives
Enhance the user’s meditation experience through multi-sensory engagement.
Provide a visually pleasing apparatus that doubles as a decorative piece when not in use.
Facilitate consistent and focused meditation through synchronized cues.

Key Features
Breathing Flower:
The Meditation Flower is able to close and open up based on selected meditation patterns with a built-in lighting that is capable of changing colors according to the user’s selection.

Vibrating Wristband:
The wristband vibrates subtly on the user’s wristband according to the selected meditation patterns.

Synchronization:
Ensures that visual and tactile cues are precisely synchronized with the selected meditation pattern.

User Customization:
Allows the user to select and customize breathing patterns, vibration intensity, and light intensity.

App Integration: 
(Might now able to realize in this round of iteration, but is open up to further development)
Enables the user to control, customize, and track their meditation sessions via a dedicated app.

Design Specification
Technological Challenges:
A smooth mechanism for the Meditation Bloom to open and close up.
Robust and quiet motor for the Meditation Bloom to ensure non-disruptive drive of the mechanical part.
A reliable communication protocol between the Meditation Flower, wristband, and app, ensuring synchronized operation.
High-precision haptic technology in the wristband for subtle and accurate vibrations.
Energy-efficient LED technology for the Meditation Flower, ensuring sustainable operation and longevity.

Mechanical Flower
Brainstorming of forms
2D Flower


3D Flower

Geek's Valentine's day: Everblooming Mechanical Flower Garden

Ball-shaped flower
Something similar to the Hoberman sphere:
https://www.youtube.com/watch?v=-DsHk_iR_xU

Pendant flower (Like a pendant light)


Circuits & Code


In terms of the coding, we plan to rely on the rotating servo motor to control the mechanical parts to mimic the flower opening and closing.

Wristband

🤖Mechanical
A simple wristband can be done through laser cutting plywood and bend it in shape: living hinge template


👾Circuits & Code
For the wristband, it has a vibrator motor built inside for vibration guiding on the wrist. The vibration pace will be in sync with the motion of the flower, working as a secondary guide device for meditation.

The circuit (and code) of the wristband is quite straightforward: by connecting vibrator motor to photon 2 and set the pace to link to the meditation pace. For the code, we can build a front-end web page that has several buttons on it. By controlling the buttons users will be able to test, begin or end the vibration.






