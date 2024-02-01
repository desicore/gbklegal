$(document).ready(function () {
  /* ------ NAV LINK CLICKS -------- */
  // About
  $("#about-nav-link, #about-footer-link").on("click", function () {
    gsap.to(window, { duration: 1, scrollTo: "#about" });
  });

  // Services
  $("#services-nav-link, #services-footer-link").on("click", function () {
    gsap.to(window, { duration: 1, scrollTo: "#services" });
  });

  // Team
  $("#team-nav-link, #team-footer-link").on("click", function () {
    gsap.to(window, { duration: 1, scrollTo: "#team" });
  });

  // Career
  $("#career-nav-link, #career-footer-link").on("click", function () {
    gsap.to(window, { duration: 1, scrollTo: "#career" });
  });

  // Contact
  $("#contact-nav-link, #contact-footer-link").on("click", function () {
    gsap.to(window, { duration: 1, scrollTo: "#contact" });
  });

  // Contact
  $("#nav-cta").on("click", function () {
    gsap.to(window, { duration: 1, scrollTo: "#contact" });
  });

  /* ------------------------------- */
  // Animate .section_about
  gsap.to(".section_about", {
    scrollTrigger: {
      trigger: ".section_about",
      start: "top center",
      toggleActions: "restart none none reverse",
    },
    paddingLeft: "0%",
    paddingRight: "0%",
    duration: 0.3,
    ease: "power1.inOut",
  });

  // Animate .about_component
  gsap.to(".about_component", {
    scrollTrigger: {
      trigger: ".section_about",
      start: "top center",
      toggleActions: "restart none none reverse",
    },
    maxWidth: "none",
    duration: 0.3,
    ease: "power1.inOut",
  });

  // Animate .about_scroll-item
  gsap.to(".about_scroll-wrapper", {
    scrollTrigger: {
      trigger: ".section_about",
      start: "top center",
      toggleActions: "restart none none reverse",
    },
    borderRadius: "0rem",
    duration: 0.3,
    ease: "power1.inOut",
  });

  /* ------------------------------------ */

  let cmsItem = $(".about_scroll-item");
  let zIndex = 1;

  $(".about_scroll-triger-item").each(function (index) {
    let itemTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        toggleActions: "restart none none reverse",
      },
    });
    if (index > 0) {
      itemTimeline.from(cmsItem.eq(index), {
        opacity: 0,
        duration: 0.2,
      });
    }

    // Text timeline
    let textTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: "top bottom",
        end: "bottom bottom",
        scrub: 1,
        onEnter: () => {
          zIndex = zIndex + 1;
          cmsItem.eq(index).css("z-index", zIndex);
        },
        onLeaveBack: () => {
          zIndex = zIndex + 1;
          cmsItem.eq(index).css("z-index", zIndex);
        },
      },
    });
    textTimeline.from(cmsItem.eq(index).find(".about_scroll-content"), {
      opacity: 0,
      y: "3rem",
      duration: 0.6,
    });
    if (index < cmsItem.last().index()) {
      textTimeline.to(cmsItem.eq(index).find(".about_scroll-content"), {
        opacity: 0,
        duration: 0.2,
      });
    }
  });

  /* ------------------------------------ */
  // Team section read more button
  $(".team_content-description-more").on("click", function () {
    // Reference to the current clicked element
    var $this = $(this);

    // Find the related '.team_content-description' for this specific button
    var $description = $this
      .closest(".team_content-description-wrapper")
      .find(".team_content-description");
    var $buttonText = $this.find(".team_content-description-more-text");

    if ($description.hasClass("text-style-4lines")) {
      // If the class is already applied, remove it and change text to 'Több'
      $description.removeClass("text-style-4lines");
      $buttonText.text("Kevesebb");
    } else {
      // If the class is not applied, add it and change text to 'Kevesebb'
      $description.addClass("text-style-4lines");
      $buttonText.text("Több");
    }
  });

  // Calculate the height of the team description text to show or hide the 'Több' button
  $(".team_content-description-more").each(function () {
    var $description = $(this)
      .closest(".team_content-description-wrapper")
      .find(".team_content-description");

    // Temporarily remove the class to check the full height
    $description.removeClass("text-style-4lines");
    var fullHeight = $description.height();

    // Add the class back after getting the height
    $description.addClass("text-style-4lines");
    var limitedHeight = $description.height();

    // Hide the button if the full height is less than or equal to the limited height
    if (fullHeight <= limitedHeight) {
      $(this).hide();
    }
  });
});
